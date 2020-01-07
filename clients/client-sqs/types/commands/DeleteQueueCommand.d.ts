import { SQSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SQSClient";
import { DeleteQueueRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteQueueCommandInput = DeleteQueueRequest;
export declare type DeleteQueueCommandOutput = __MetadataBearer;
export declare class DeleteQueueCommand extends $Command<DeleteQueueCommandInput, DeleteQueueCommandOutput, SQSClientResolvedConfig> {
    readonly input: DeleteQueueCommandInput;
    constructor(input: DeleteQueueCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SQSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteQueueCommandInput, DeleteQueueCommandOutput>;
    private serialize;
    private deserialize;
}
