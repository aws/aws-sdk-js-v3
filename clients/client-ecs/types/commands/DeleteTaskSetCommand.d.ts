import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { DeleteTaskSetRequest, DeleteTaskSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteTaskSetCommandInput = DeleteTaskSetRequest;
export declare type DeleteTaskSetCommandOutput = DeleteTaskSetResponse & __MetadataBearer;
export declare class DeleteTaskSetCommand extends $Command<DeleteTaskSetCommandInput, DeleteTaskSetCommandOutput, ECSClientResolvedConfig> {
    readonly input: DeleteTaskSetCommandInput;
    constructor(input: DeleteTaskSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTaskSetCommandInput, DeleteTaskSetCommandOutput>;
    private serialize;
    private deserialize;
}
