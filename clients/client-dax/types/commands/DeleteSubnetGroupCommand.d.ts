import { DAXClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DAXClient";
import { DeleteSubnetGroupRequest, DeleteSubnetGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteSubnetGroupCommandInput = DeleteSubnetGroupRequest;
export declare type DeleteSubnetGroupCommandOutput = DeleteSubnetGroupResponse & __MetadataBearer;
export declare class DeleteSubnetGroupCommand extends $Command<DeleteSubnetGroupCommandInput, DeleteSubnetGroupCommandOutput, DAXClientResolvedConfig> {
    readonly input: DeleteSubnetGroupCommandInput;
    constructor(input: DeleteSubnetGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DAXClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSubnetGroupCommandInput, DeleteSubnetGroupCommandOutput>;
    private serialize;
    private deserialize;
}
