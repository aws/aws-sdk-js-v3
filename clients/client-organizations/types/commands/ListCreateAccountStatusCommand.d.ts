import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { ListCreateAccountStatusRequest, ListCreateAccountStatusResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListCreateAccountStatusCommandInput = ListCreateAccountStatusRequest;
export declare type ListCreateAccountStatusCommandOutput = ListCreateAccountStatusResponse & __MetadataBearer;
export declare class ListCreateAccountStatusCommand extends $Command<ListCreateAccountStatusCommandInput, ListCreateAccountStatusCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: ListCreateAccountStatusCommandInput;
    constructor(input: ListCreateAccountStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListCreateAccountStatusCommandInput, ListCreateAccountStatusCommandOutput>;
    private serialize;
    private deserialize;
}
