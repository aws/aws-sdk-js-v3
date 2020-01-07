import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListSSHPublicKeysRequest, ListSSHPublicKeysResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListSSHPublicKeysCommandInput = ListSSHPublicKeysRequest;
export declare type ListSSHPublicKeysCommandOutput = ListSSHPublicKeysResponse & __MetadataBearer;
export declare class ListSSHPublicKeysCommand extends $Command<ListSSHPublicKeysCommandInput, ListSSHPublicKeysCommandOutput, IAMClientResolvedConfig> {
    readonly input: ListSSHPublicKeysCommandInput;
    constructor(input: ListSSHPublicKeysCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSSHPublicKeysCommandInput, ListSSHPublicKeysCommandOutput>;
    private serialize;
    private deserialize;
}
