import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";
import { CreateSubscriptionRequest, CreateSubscriptionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateSubscriptionCommandInput = CreateSubscriptionRequest;
export declare type CreateSubscriptionCommandOutput = CreateSubscriptionResponse & __MetadataBearer;
export declare class CreateSubscriptionCommand extends $Command<CreateSubscriptionCommandInput, CreateSubscriptionCommandOutput, ShieldClientResolvedConfig> {
    readonly input: CreateSubscriptionCommandInput;
    constructor(input: CreateSubscriptionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ShieldClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSubscriptionCommandInput, CreateSubscriptionCommandOutput>;
    private serialize;
    private deserialize;
}
