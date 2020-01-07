import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ModifyClusterIamRolesMessage, ModifyClusterIamRolesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyClusterIamRolesCommandInput = ModifyClusterIamRolesMessage;
export declare type ModifyClusterIamRolesCommandOutput = ModifyClusterIamRolesResult & __MetadataBearer;
export declare class ModifyClusterIamRolesCommand extends $Command<ModifyClusterIamRolesCommandInput, ModifyClusterIamRolesCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: ModifyClusterIamRolesCommandInput;
    constructor(input: ModifyClusterIamRolesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyClusterIamRolesCommandInput, ModifyClusterIamRolesCommandOutput>;
    private serialize;
    private deserialize;
}
