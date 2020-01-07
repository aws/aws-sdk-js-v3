import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListPolicyVersionsRequest, ListPolicyVersionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListPolicyVersionsCommandInput = ListPolicyVersionsRequest;
export declare type ListPolicyVersionsCommandOutput = ListPolicyVersionsResponse & __MetadataBearer;
export declare class ListPolicyVersionsCommand extends $Command<ListPolicyVersionsCommandInput, ListPolicyVersionsCommandOutput, IAMClientResolvedConfig> {
    readonly input: ListPolicyVersionsCommandInput;
    constructor(input: ListPolicyVersionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPolicyVersionsCommandInput, ListPolicyVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
