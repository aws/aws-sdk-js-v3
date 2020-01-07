import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { CreateDBSecurityGroupMessage, CreateDBSecurityGroupResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDBSecurityGroupCommandInput = CreateDBSecurityGroupMessage;
export declare type CreateDBSecurityGroupCommandOutput = CreateDBSecurityGroupResult & __MetadataBearer;
export declare class CreateDBSecurityGroupCommand extends $Command<CreateDBSecurityGroupCommandInput, CreateDBSecurityGroupCommandOutput, RDSClientResolvedConfig> {
    readonly input: CreateDBSecurityGroupCommandInput;
    constructor(input: CreateDBSecurityGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDBSecurityGroupCommandInput, CreateDBSecurityGroupCommandOutput>;
    private serialize;
    private deserialize;
}
