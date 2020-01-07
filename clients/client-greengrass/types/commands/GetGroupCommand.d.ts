import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetGroupRequest, GetGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetGroupCommandInput = GetGroupRequest;
export declare type GetGroupCommandOutput = GetGroupResponse & __MetadataBearer;
export declare class GetGroupCommand extends $Command<GetGroupCommandInput, GetGroupCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: GetGroupCommandInput;
    constructor(input: GetGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetGroupCommandInput, GetGroupCommandOutput>;
    private serialize;
    private deserialize;
}
