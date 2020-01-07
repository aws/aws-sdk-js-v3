import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DeleteClusterParameterGroupMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteClusterParameterGroupCommandInput = DeleteClusterParameterGroupMessage;
export declare type DeleteClusterParameterGroupCommandOutput = __MetadataBearer;
export declare class DeleteClusterParameterGroupCommand extends $Command<DeleteClusterParameterGroupCommandInput, DeleteClusterParameterGroupCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DeleteClusterParameterGroupCommandInput;
    constructor(input: DeleteClusterParameterGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteClusterParameterGroupCommandInput, DeleteClusterParameterGroupCommandOutput>;
    private serialize;
    private deserialize;
}
