import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateSpotDatafeedSubscriptionRequest, CreateSpotDatafeedSubscriptionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateSpotDatafeedSubscriptionCommandInput = CreateSpotDatafeedSubscriptionRequest;
export declare type CreateSpotDatafeedSubscriptionCommandOutput = CreateSpotDatafeedSubscriptionResult & __MetadataBearer;
export declare class CreateSpotDatafeedSubscriptionCommand extends $Command<CreateSpotDatafeedSubscriptionCommandInput, CreateSpotDatafeedSubscriptionCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateSpotDatafeedSubscriptionCommandInput;
    constructor(input: CreateSpotDatafeedSubscriptionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSpotDatafeedSubscriptionCommandInput, CreateSpotDatafeedSubscriptionCommandOutput>;
    private serialize;
    private deserialize;
}
