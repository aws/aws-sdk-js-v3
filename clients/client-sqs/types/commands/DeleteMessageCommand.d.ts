import { SQSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SQSClient";
import { DeleteMessageRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteMessageCommandInput = DeleteMessageRequest;
export declare type DeleteMessageCommandOutput = __MetadataBearer;
export declare class DeleteMessageCommand extends $Command<DeleteMessageCommandInput, DeleteMessageCommandOutput, SQSClientResolvedConfig> {
    readonly input: DeleteMessageCommandInput;
    constructor(input: DeleteMessageCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SQSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteMessageCommandInput, DeleteMessageCommandOutput>;
    private serialize;
    private deserialize;
}
