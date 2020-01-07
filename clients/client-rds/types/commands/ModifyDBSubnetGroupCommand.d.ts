import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { ModifyDBSubnetGroupMessage, ModifyDBSubnetGroupResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyDBSubnetGroupCommandInput = ModifyDBSubnetGroupMessage;
export declare type ModifyDBSubnetGroupCommandOutput = ModifyDBSubnetGroupResult & __MetadataBearer;
export declare class ModifyDBSubnetGroupCommand extends $Command<ModifyDBSubnetGroupCommandInput, ModifyDBSubnetGroupCommandOutput, RDSClientResolvedConfig> {
    readonly input: ModifyDBSubnetGroupCommandInput;
    constructor(input: ModifyDBSubnetGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyDBSubnetGroupCommandInput, ModifyDBSubnetGroupCommandOutput>;
    private serialize;
    private deserialize;
}
