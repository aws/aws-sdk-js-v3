import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { DeleteCacheSecurityGroupMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteCacheSecurityGroupCommandInput = DeleteCacheSecurityGroupMessage;
export declare type DeleteCacheSecurityGroupCommandOutput = __MetadataBearer;
export declare class DeleteCacheSecurityGroupCommand extends $Command<DeleteCacheSecurityGroupCommandInput, DeleteCacheSecurityGroupCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: DeleteCacheSecurityGroupCommandInput;
    constructor(input: DeleteCacheSecurityGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteCacheSecurityGroupCommandInput, DeleteCacheSecurityGroupCommandOutput>;
    private serialize;
    private deserialize;
}
