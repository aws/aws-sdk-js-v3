import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import { CreateSubscriberRequest, CreateSubscriberResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateSubscriberCommandInput = CreateSubscriberRequest;
export declare type CreateSubscriberCommandOutput = CreateSubscriberResponse & __MetadataBearer;
export declare class CreateSubscriberCommand extends $Command<CreateSubscriberCommandInput, CreateSubscriberCommandOutput, BudgetsClientResolvedConfig> {
    readonly input: CreateSubscriberCommandInput;
    constructor(input: CreateSubscriberCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: BudgetsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSubscriberCommandInput, CreateSubscriberCommandOutput>;
    private serialize;
    private deserialize;
}
