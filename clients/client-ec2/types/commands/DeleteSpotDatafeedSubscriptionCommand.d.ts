import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteSpotDatafeedSubscriptionRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteSpotDatafeedSubscriptionCommandInput = DeleteSpotDatafeedSubscriptionRequest;
export declare type DeleteSpotDatafeedSubscriptionCommandOutput = __MetadataBearer;
export declare class DeleteSpotDatafeedSubscriptionCommand extends $Command<DeleteSpotDatafeedSubscriptionCommandInput, DeleteSpotDatafeedSubscriptionCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteSpotDatafeedSubscriptionCommandInput;
    constructor(input: DeleteSpotDatafeedSubscriptionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSpotDatafeedSubscriptionCommandInput, DeleteSpotDatafeedSubscriptionCommandOutput>;
    private serialize;
    private deserialize;
}
