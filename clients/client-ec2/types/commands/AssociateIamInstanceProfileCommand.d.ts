import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AssociateIamInstanceProfileRequest, AssociateIamInstanceProfileResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateIamInstanceProfileCommandInput = AssociateIamInstanceProfileRequest;
export declare type AssociateIamInstanceProfileCommandOutput = AssociateIamInstanceProfileResult & __MetadataBearer;
export declare class AssociateIamInstanceProfileCommand extends $Command<AssociateIamInstanceProfileCommandInput, AssociateIamInstanceProfileCommandOutput, EC2ClientResolvedConfig> {
    readonly input: AssociateIamInstanceProfileCommandInput;
    constructor(input: AssociateIamInstanceProfileCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateIamInstanceProfileCommandInput, AssociateIamInstanceProfileCommandOutput>;
    private serialize;
    private deserialize;
}
