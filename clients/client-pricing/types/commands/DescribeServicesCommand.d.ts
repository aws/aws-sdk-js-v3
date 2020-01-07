import { PricingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PricingClient";
import { DescribeServicesRequest, DescribeServicesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeServicesCommandInput = DescribeServicesRequest;
export declare type DescribeServicesCommandOutput = DescribeServicesResponse & __MetadataBearer;
export declare class DescribeServicesCommand extends $Command<DescribeServicesCommandInput, DescribeServicesCommandOutput, PricingClientResolvedConfig> {
    readonly input: DescribeServicesCommandInput;
    constructor(input: DescribeServicesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PricingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeServicesCommandInput, DescribeServicesCommandOutput>;
    private serialize;
    private deserialize;
}
