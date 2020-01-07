import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { RemoveRoleFromDBClusterMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RemoveRoleFromDBClusterCommandInput = RemoveRoleFromDBClusterMessage;
export declare type RemoveRoleFromDBClusterCommandOutput = __MetadataBearer;
export declare class RemoveRoleFromDBClusterCommand extends $Command<RemoveRoleFromDBClusterCommandInput, RemoveRoleFromDBClusterCommandOutput, NeptuneClientResolvedConfig> {
    readonly input: RemoveRoleFromDBClusterCommandInput;
    constructor(input: RemoveRoleFromDBClusterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NeptuneClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemoveRoleFromDBClusterCommandInput, RemoveRoleFromDBClusterCommandOutput>;
    private serialize;
    private deserialize;
}
