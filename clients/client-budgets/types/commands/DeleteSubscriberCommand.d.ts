import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import { DeleteSubscriberRequest, DeleteSubscriberResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteSubscriberCommandInput = DeleteSubscriberRequest;
export declare type DeleteSubscriberCommandOutput = DeleteSubscriberResponse & __MetadataBearer;
export declare class DeleteSubscriberCommand extends $Command<DeleteSubscriberCommandInput, DeleteSubscriberCommandOutput, BudgetsClientResolvedConfig> {
    readonly input: DeleteSubscriberCommandInput;
    constructor(input: DeleteSubscriberCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: BudgetsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSubscriberCommandInput, DeleteSubscriberCommandOutput>;
    private serialize;
    private deserialize;
}
