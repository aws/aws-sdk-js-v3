import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { DeleteDBClusterParameterGroupMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteDBClusterParameterGroupCommandInput = DeleteDBClusterParameterGroupMessage;
export declare type DeleteDBClusterParameterGroupCommandOutput = __MetadataBearer;
export declare class DeleteDBClusterParameterGroupCommand extends $Command<DeleteDBClusterParameterGroupCommandInput, DeleteDBClusterParameterGroupCommandOutput, NeptuneClientResolvedConfig> {
    readonly input: DeleteDBClusterParameterGroupCommandInput;
    constructor(input: DeleteDBClusterParameterGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NeptuneClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDBClusterParameterGroupCommandInput, DeleteDBClusterParameterGroupCommandOutput>;
    private serialize;
    private deserialize;
}
