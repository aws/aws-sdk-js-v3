import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { DeleteFlowRequest, DeleteFlowResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteFlowCommandInput = DeleteFlowRequest;
export declare type DeleteFlowCommandOutput = DeleteFlowResponse & __MetadataBearer;
export declare class DeleteFlowCommand extends $Command<DeleteFlowCommandInput, DeleteFlowCommandOutput, MediaConnectClientResolvedConfig> {
    readonly input: DeleteFlowCommandInput;
    constructor(input: DeleteFlowCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteFlowCommandInput, DeleteFlowCommandOutput>;
    private serialize;
    private deserialize;
}
