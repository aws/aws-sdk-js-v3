import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { GetSubscriptionAttributesInput, GetSubscriptionAttributesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetSubscriptionAttributesCommandInput = GetSubscriptionAttributesInput;
export declare type GetSubscriptionAttributesCommandOutput = GetSubscriptionAttributesResponse & __MetadataBearer;
export declare class GetSubscriptionAttributesCommand extends $Command<GetSubscriptionAttributesCommandInput, GetSubscriptionAttributesCommandOutput, SNSClientResolvedConfig> {
    readonly input: GetSubscriptionAttributesCommandInput;
    constructor(input: GetSubscriptionAttributesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSubscriptionAttributesCommandInput, GetSubscriptionAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
