import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeDeliveryChannelStatusRequest, DescribeDeliveryChannelStatusResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDeliveryChannelStatusCommandInput = DescribeDeliveryChannelStatusRequest;
export declare type DescribeDeliveryChannelStatusCommandOutput = DescribeDeliveryChannelStatusResponse & __MetadataBearer;
export declare class DescribeDeliveryChannelStatusCommand extends $Command<DescribeDeliveryChannelStatusCommandInput, DescribeDeliveryChannelStatusCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DescribeDeliveryChannelStatusCommandInput;
    constructor(input: DescribeDeliveryChannelStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDeliveryChannelStatusCommandInput, DescribeDeliveryChannelStatusCommandOutput>;
    private serialize;
    private deserialize;
}
