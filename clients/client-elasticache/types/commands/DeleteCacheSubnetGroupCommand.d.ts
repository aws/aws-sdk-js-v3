import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { DeleteCacheSubnetGroupMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteCacheSubnetGroupCommandInput = DeleteCacheSubnetGroupMessage;
export declare type DeleteCacheSubnetGroupCommandOutput = __MetadataBearer;
export declare class DeleteCacheSubnetGroupCommand extends $Command<DeleteCacheSubnetGroupCommandInput, DeleteCacheSubnetGroupCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: DeleteCacheSubnetGroupCommandInput;
    constructor(input: DeleteCacheSubnetGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteCacheSubnetGroupCommandInput, DeleteCacheSubnetGroupCommandOutput>;
    private serialize;
    private deserialize;
}
