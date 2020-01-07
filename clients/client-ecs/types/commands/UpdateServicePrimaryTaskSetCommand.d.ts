import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { UpdateServicePrimaryTaskSetRequest, UpdateServicePrimaryTaskSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateServicePrimaryTaskSetCommandInput = UpdateServicePrimaryTaskSetRequest;
export declare type UpdateServicePrimaryTaskSetCommandOutput = UpdateServicePrimaryTaskSetResponse & __MetadataBearer;
export declare class UpdateServicePrimaryTaskSetCommand extends $Command<UpdateServicePrimaryTaskSetCommandInput, UpdateServicePrimaryTaskSetCommandOutput, ECSClientResolvedConfig> {
    readonly input: UpdateServicePrimaryTaskSetCommandInput;
    constructor(input: UpdateServicePrimaryTaskSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateServicePrimaryTaskSetCommandInput, UpdateServicePrimaryTaskSetCommandOutput>;
    private serialize;
    private deserialize;
}
