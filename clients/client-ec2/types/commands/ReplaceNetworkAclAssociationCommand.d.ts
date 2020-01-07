import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ReplaceNetworkAclAssociationRequest, ReplaceNetworkAclAssociationResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ReplaceNetworkAclAssociationCommandInput = ReplaceNetworkAclAssociationRequest;
export declare type ReplaceNetworkAclAssociationCommandOutput = ReplaceNetworkAclAssociationResult & __MetadataBearer;
export declare class ReplaceNetworkAclAssociationCommand extends $Command<ReplaceNetworkAclAssociationCommandInput, ReplaceNetworkAclAssociationCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ReplaceNetworkAclAssociationCommandInput;
    constructor(input: ReplaceNetworkAclAssociationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ReplaceNetworkAclAssociationCommandInput, ReplaceNetworkAclAssociationCommandOutput>;
    private serialize;
    private deserialize;
}
