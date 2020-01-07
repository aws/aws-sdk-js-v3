import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListServiceSpecificCredentialsRequest, ListServiceSpecificCredentialsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListServiceSpecificCredentialsCommandInput = ListServiceSpecificCredentialsRequest;
export declare type ListServiceSpecificCredentialsCommandOutput = ListServiceSpecificCredentialsResponse & __MetadataBearer;
export declare class ListServiceSpecificCredentialsCommand extends $Command<ListServiceSpecificCredentialsCommandInput, ListServiceSpecificCredentialsCommandOutput, IAMClientResolvedConfig> {
    readonly input: ListServiceSpecificCredentialsCommandInput;
    constructor(input: ListServiceSpecificCredentialsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListServiceSpecificCredentialsCommandInput, ListServiceSpecificCredentialsCommandOutput>;
    private serialize;
    private deserialize;
}
