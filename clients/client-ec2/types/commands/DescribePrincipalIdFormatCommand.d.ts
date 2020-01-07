import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribePrincipalIdFormatRequest, DescribePrincipalIdFormatResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribePrincipalIdFormatCommandInput = DescribePrincipalIdFormatRequest;
export declare type DescribePrincipalIdFormatCommandOutput = DescribePrincipalIdFormatResult & __MetadataBearer;
export declare class DescribePrincipalIdFormatCommand extends $Command<DescribePrincipalIdFormatCommandInput, DescribePrincipalIdFormatCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribePrincipalIdFormatCommandInput;
    constructor(input: DescribePrincipalIdFormatCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePrincipalIdFormatCommandInput, DescribePrincipalIdFormatCommandOutput>;
    private serialize;
    private deserialize;
}
