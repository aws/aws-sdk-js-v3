import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DeleteClusterSubnetGroupMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteClusterSubnetGroupCommandInput = DeleteClusterSubnetGroupMessage;
export declare type DeleteClusterSubnetGroupCommandOutput = __MetadataBearer;
export declare class DeleteClusterSubnetGroupCommand extends $Command<DeleteClusterSubnetGroupCommandInput, DeleteClusterSubnetGroupCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DeleteClusterSubnetGroupCommandInput;
    constructor(input: DeleteClusterSubnetGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteClusterSubnetGroupCommandInput, DeleteClusterSubnetGroupCommandOutput>;
    private serialize;
    private deserialize;
}
