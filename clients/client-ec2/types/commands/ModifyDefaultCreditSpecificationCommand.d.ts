import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyDefaultCreditSpecificationRequest, ModifyDefaultCreditSpecificationResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyDefaultCreditSpecificationCommandInput = ModifyDefaultCreditSpecificationRequest;
export declare type ModifyDefaultCreditSpecificationCommandOutput = ModifyDefaultCreditSpecificationResult & __MetadataBearer;
export declare class ModifyDefaultCreditSpecificationCommand extends $Command<ModifyDefaultCreditSpecificationCommandInput, ModifyDefaultCreditSpecificationCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyDefaultCreditSpecificationCommandInput;
    constructor(input: ModifyDefaultCreditSpecificationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyDefaultCreditSpecificationCommandInput, ModifyDefaultCreditSpecificationCommandOutput>;
    private serialize;
    private deserialize;
}
