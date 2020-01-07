import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { DeleteLogSubscriptionRequest, DeleteLogSubscriptionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteLogSubscriptionCommandInput = DeleteLogSubscriptionRequest;
export declare type DeleteLogSubscriptionCommandOutput = DeleteLogSubscriptionResult & __MetadataBearer;
export declare class DeleteLogSubscriptionCommand extends $Command<DeleteLogSubscriptionCommandInput, DeleteLogSubscriptionCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: DeleteLogSubscriptionCommandInput;
    constructor(input: DeleteLogSubscriptionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteLogSubscriptionCommandInput, DeleteLogSubscriptionCommandOutput>;
    private serialize;
    private deserialize;
}
