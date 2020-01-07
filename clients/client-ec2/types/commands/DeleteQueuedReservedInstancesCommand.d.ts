import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteQueuedReservedInstancesRequest, DeleteQueuedReservedInstancesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteQueuedReservedInstancesCommandInput = DeleteQueuedReservedInstancesRequest;
export declare type DeleteQueuedReservedInstancesCommandOutput = DeleteQueuedReservedInstancesResult & __MetadataBearer;
export declare class DeleteQueuedReservedInstancesCommand extends $Command<DeleteQueuedReservedInstancesCommandInput, DeleteQueuedReservedInstancesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteQueuedReservedInstancesCommandInput;
    constructor(input: DeleteQueuedReservedInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteQueuedReservedInstancesCommandInput, DeleteQueuedReservedInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
