import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { AddRoleToDBClusterMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AddRoleToDBClusterCommandInput = AddRoleToDBClusterMessage;
export declare type AddRoleToDBClusterCommandOutput = __MetadataBearer;
export declare class AddRoleToDBClusterCommand extends $Command<AddRoleToDBClusterCommandInput, AddRoleToDBClusterCommandOutput, NeptuneClientResolvedConfig> {
    readonly input: AddRoleToDBClusterCommandInput;
    constructor(input: AddRoleToDBClusterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NeptuneClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddRoleToDBClusterCommandInput, AddRoleToDBClusterCommandOutput>;
    private serialize;
    private deserialize;
}
