import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { DescribeEffectivePolicyRequest, DescribeEffectivePolicyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeEffectivePolicyCommandInput = DescribeEffectivePolicyRequest;
export declare type DescribeEffectivePolicyCommandOutput = DescribeEffectivePolicyResponse & __MetadataBearer;
export declare class DescribeEffectivePolicyCommand extends $Command<DescribeEffectivePolicyCommandInput, DescribeEffectivePolicyCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: DescribeEffectivePolicyCommandInput;
    constructor(input: DescribeEffectivePolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEffectivePolicyCommandInput, DescribeEffectivePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
