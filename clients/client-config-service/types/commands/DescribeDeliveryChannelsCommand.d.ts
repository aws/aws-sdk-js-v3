import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeDeliveryChannelsRequest, DescribeDeliveryChannelsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDeliveryChannelsCommandInput = DescribeDeliveryChannelsRequest;
export declare type DescribeDeliveryChannelsCommandOutput = DescribeDeliveryChannelsResponse & __MetadataBearer;
export declare class DescribeDeliveryChannelsCommand extends $Command<DescribeDeliveryChannelsCommandInput, DescribeDeliveryChannelsCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DescribeDeliveryChannelsCommandInput;
    constructor(input: DescribeDeliveryChannelsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDeliveryChannelsCommandInput, DescribeDeliveryChannelsCommandOutput>;
    private serialize;
    private deserialize;
}
