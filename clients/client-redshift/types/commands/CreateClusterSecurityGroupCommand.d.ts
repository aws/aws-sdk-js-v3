import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { CreateClusterSecurityGroupMessage, CreateClusterSecurityGroupResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateClusterSecurityGroupCommandInput = CreateClusterSecurityGroupMessage;
export declare type CreateClusterSecurityGroupCommandOutput = CreateClusterSecurityGroupResult & __MetadataBearer;
export declare class CreateClusterSecurityGroupCommand extends $Command<CreateClusterSecurityGroupCommandInput, CreateClusterSecurityGroupCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: CreateClusterSecurityGroupCommandInput;
    constructor(input: CreateClusterSecurityGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateClusterSecurityGroupCommandInput, CreateClusterSecurityGroupCommandOutput>;
    private serialize;
    private deserialize;
}
