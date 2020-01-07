import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import { UpdateSubscriberRequest, UpdateSubscriberResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateSubscriberCommandInput = UpdateSubscriberRequest;
export declare type UpdateSubscriberCommandOutput = UpdateSubscriberResponse & __MetadataBearer;
export declare class UpdateSubscriberCommand extends $Command<UpdateSubscriberCommandInput, UpdateSubscriberCommandOutput, BudgetsClientResolvedConfig> {
    readonly input: UpdateSubscriberCommandInput;
    constructor(input: UpdateSubscriberCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: BudgetsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateSubscriberCommandInput, UpdateSubscriberCommandOutput>;
    private serialize;
    private deserialize;
}
