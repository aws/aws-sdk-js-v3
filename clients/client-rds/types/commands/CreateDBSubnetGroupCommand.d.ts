import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { CreateDBSubnetGroupMessage, CreateDBSubnetGroupResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDBSubnetGroupCommandInput = CreateDBSubnetGroupMessage;
export declare type CreateDBSubnetGroupCommandOutput = CreateDBSubnetGroupResult & __MetadataBearer;
export declare class CreateDBSubnetGroupCommand extends $Command<CreateDBSubnetGroupCommandInput, CreateDBSubnetGroupCommandOutput, RDSClientResolvedConfig> {
    readonly input: CreateDBSubnetGroupCommandInput;
    constructor(input: CreateDBSubnetGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDBSubnetGroupCommandInput, CreateDBSubnetGroupCommandOutput>;
    private serialize;
    private deserialize;
}
