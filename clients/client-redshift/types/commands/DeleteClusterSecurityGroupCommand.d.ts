import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DeleteClusterSecurityGroupMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteClusterSecurityGroupCommandInput = DeleteClusterSecurityGroupMessage;
export declare type DeleteClusterSecurityGroupCommandOutput = __MetadataBearer;
export declare class DeleteClusterSecurityGroupCommand extends $Command<DeleteClusterSecurityGroupCommandInput, DeleteClusterSecurityGroupCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DeleteClusterSecurityGroupCommandInput;
    constructor(input: DeleteClusterSecurityGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteClusterSecurityGroupCommandInput, DeleteClusterSecurityGroupCommandOutput>;
    private serialize;
    private deserialize;
}
