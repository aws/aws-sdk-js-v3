import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ReplaceIamInstanceProfileAssociationRequest, ReplaceIamInstanceProfileAssociationResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ReplaceIamInstanceProfileAssociationCommandInput = ReplaceIamInstanceProfileAssociationRequest;
export declare type ReplaceIamInstanceProfileAssociationCommandOutput = ReplaceIamInstanceProfileAssociationResult & __MetadataBearer;
export declare class ReplaceIamInstanceProfileAssociationCommand extends $Command<ReplaceIamInstanceProfileAssociationCommandInput, ReplaceIamInstanceProfileAssociationCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ReplaceIamInstanceProfileAssociationCommandInput;
    constructor(input: ReplaceIamInstanceProfileAssociationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ReplaceIamInstanceProfileAssociationCommandInput, ReplaceIamInstanceProfileAssociationCommandOutput>;
    private serialize;
    private deserialize;
}
