import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { DeleteCacheParameterGroupMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteCacheParameterGroupCommandInput = DeleteCacheParameterGroupMessage;
export declare type DeleteCacheParameterGroupCommandOutput = __MetadataBearer;
export declare class DeleteCacheParameterGroupCommand extends $Command<DeleteCacheParameterGroupCommandInput, DeleteCacheParameterGroupCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: DeleteCacheParameterGroupCommandInput;
    constructor(input: DeleteCacheParameterGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteCacheParameterGroupCommandInput, DeleteCacheParameterGroupCommandOutput>;
    private serialize;
    private deserialize;
}
