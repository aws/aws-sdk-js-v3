import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { UpdateTaskSetRequest, UpdateTaskSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateTaskSetCommandInput = UpdateTaskSetRequest;
export declare type UpdateTaskSetCommandOutput = UpdateTaskSetResponse & __MetadataBearer;
export declare class UpdateTaskSetCommand extends $Command<UpdateTaskSetCommandInput, UpdateTaskSetCommandOutput, ECSClientResolvedConfig> {
    readonly input: UpdateTaskSetCommandInput;
    constructor(input: UpdateTaskSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateTaskSetCommandInput, UpdateTaskSetCommandOutput>;
    private serialize;
    private deserialize;
}
