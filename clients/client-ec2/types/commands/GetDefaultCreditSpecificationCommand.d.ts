import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetDefaultCreditSpecificationRequest, GetDefaultCreditSpecificationResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetDefaultCreditSpecificationCommandInput = GetDefaultCreditSpecificationRequest;
export declare type GetDefaultCreditSpecificationCommandOutput = GetDefaultCreditSpecificationResult & __MetadataBearer;
export declare class GetDefaultCreditSpecificationCommand extends $Command<GetDefaultCreditSpecificationCommandInput, GetDefaultCreditSpecificationCommandOutput, EC2ClientResolvedConfig> {
    readonly input: GetDefaultCreditSpecificationCommandInput;
    constructor(input: GetDefaultCreditSpecificationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDefaultCreditSpecificationCommandInput, GetDefaultCreditSpecificationCommandOutput>;
    private serialize;
    private deserialize;
}
