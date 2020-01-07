import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { AddRoleToDBClusterMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AddRoleToDBClusterCommandInput = AddRoleToDBClusterMessage;
export declare type AddRoleToDBClusterCommandOutput = __MetadataBearer;
export declare class AddRoleToDBClusterCommand extends $Command<AddRoleToDBClusterCommandInput, AddRoleToDBClusterCommandOutput, RDSClientResolvedConfig> {
    readonly input: AddRoleToDBClusterCommandInput;
    constructor(input: AddRoleToDBClusterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddRoleToDBClusterCommandInput, AddRoleToDBClusterCommandOutput>;
    private serialize;
    private deserialize;
}
