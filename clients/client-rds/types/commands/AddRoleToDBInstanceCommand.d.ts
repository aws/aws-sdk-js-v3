import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { AddRoleToDBInstanceMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AddRoleToDBInstanceCommandInput = AddRoleToDBInstanceMessage;
export declare type AddRoleToDBInstanceCommandOutput = __MetadataBearer;
export declare class AddRoleToDBInstanceCommand extends $Command<AddRoleToDBInstanceCommandInput, AddRoleToDBInstanceCommandOutput, RDSClientResolvedConfig> {
    readonly input: AddRoleToDBInstanceCommandInput;
    constructor(input: AddRoleToDBInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddRoleToDBInstanceCommandInput, AddRoleToDBInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
