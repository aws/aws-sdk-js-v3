import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { DescribePoliciesType, PoliciesType } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribePoliciesCommandInput = DescribePoliciesType;
export declare type DescribePoliciesCommandOutput = PoliciesType & __MetadataBearer;
export declare class DescribePoliciesCommand extends $Command<DescribePoliciesCommandInput, DescribePoliciesCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: DescribePoliciesCommandInput;
    constructor(input: DescribePoliciesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePoliciesCommandInput, DescribePoliciesCommandOutput>;
    private serialize;
    private deserialize;
}
