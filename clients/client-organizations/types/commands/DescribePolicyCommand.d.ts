import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { DescribePolicyRequest, DescribePolicyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribePolicyCommandInput = DescribePolicyRequest;
export declare type DescribePolicyCommandOutput = DescribePolicyResponse & __MetadataBearer;
export declare class DescribePolicyCommand extends $Command<DescribePolicyCommandInput, DescribePolicyCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: DescribePolicyCommandInput;
    constructor(input: DescribePolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePolicyCommandInput, DescribePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
