import { DAXClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DAXClient";
import { UpdateSubnetGroupRequest, UpdateSubnetGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateSubnetGroupCommandInput = UpdateSubnetGroupRequest;
export declare type UpdateSubnetGroupCommandOutput = UpdateSubnetGroupResponse & __MetadataBearer;
export declare class UpdateSubnetGroupCommand extends $Command<UpdateSubnetGroupCommandInput, UpdateSubnetGroupCommandOutput, DAXClientResolvedConfig> {
    readonly input: UpdateSubnetGroupCommandInput;
    constructor(input: UpdateSubnetGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DAXClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateSubnetGroupCommandInput, UpdateSubnetGroupCommandOutput>;
    private serialize;
    private deserialize;
}
