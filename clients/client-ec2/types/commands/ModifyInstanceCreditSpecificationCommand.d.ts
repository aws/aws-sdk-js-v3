import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyInstanceCreditSpecificationRequest, ModifyInstanceCreditSpecificationResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyInstanceCreditSpecificationCommandInput = ModifyInstanceCreditSpecificationRequest;
export declare type ModifyInstanceCreditSpecificationCommandOutput = ModifyInstanceCreditSpecificationResult & __MetadataBearer;
export declare class ModifyInstanceCreditSpecificationCommand extends $Command<ModifyInstanceCreditSpecificationCommandInput, ModifyInstanceCreditSpecificationCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyInstanceCreditSpecificationCommandInput;
    constructor(input: ModifyInstanceCreditSpecificationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyInstanceCreditSpecificationCommandInput, ModifyInstanceCreditSpecificationCommandOutput>;
    private serialize;
    private deserialize;
}
