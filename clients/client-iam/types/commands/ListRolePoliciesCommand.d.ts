import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListRolePoliciesRequest, ListRolePoliciesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListRolePoliciesCommandInput = ListRolePoliciesRequest;
export declare type ListRolePoliciesCommandOutput = ListRolePoliciesResponse & __MetadataBearer;
export declare class ListRolePoliciesCommand extends $Command<ListRolePoliciesCommandInput, ListRolePoliciesCommandOutput, IAMClientResolvedConfig> {
    readonly input: ListRolePoliciesCommandInput;
    constructor(input: ListRolePoliciesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRolePoliciesCommandInput, ListRolePoliciesCommandOutput>;
    private serialize;
    private deserialize;
}
