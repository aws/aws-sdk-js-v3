import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DisassociateIamInstanceProfileRequest, DisassociateIamInstanceProfileResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisassociateIamInstanceProfileCommandInput = DisassociateIamInstanceProfileRequest;
export declare type DisassociateIamInstanceProfileCommandOutput = DisassociateIamInstanceProfileResult & __MetadataBearer;
export declare class DisassociateIamInstanceProfileCommand extends $Command<DisassociateIamInstanceProfileCommandInput, DisassociateIamInstanceProfileCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DisassociateIamInstanceProfileCommandInput;
    constructor(input: DisassociateIamInstanceProfileCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateIamInstanceProfileCommandInput, DisassociateIamInstanceProfileCommandOutput>;
    private serialize;
    private deserialize;
}
